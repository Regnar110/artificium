import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import delete_red from '../../../../../public/controller/delete_red.svg'
import { ThemeProvider } from '@emotion/react';
import ModalFooter from '../Components/ModalFooter';
import GlassModal from '../GlassModal/GlassModal';
import ModalScrollContainer from '../Components/ModalScrollContainer';
import MailBoxScrollForm from '../Components/MailBoxScrollForm';
import MailItem from './components/MailItem';
import { Button, Checkbox, IconButton, TextField, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import { resolve } from 'path';

interface Props {
    modalIsOpen:boolean;
    setModal:(new_status: boolean) => void
}

const dummyMailItemsArr = [
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W1",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W2",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W3",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W4",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W5",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W6",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W7",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W8",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W9",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W10",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W11",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W12",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W13",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W14",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W15",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W16",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W17",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W18",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W19",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W111",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W112",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  {
    _mailId:"asdnjansdn2noi3jieo21394n",
    type:"friend_request",
    from: "Mateusz W113",
    topic:"Friend request",
    content:"coskasnkdalnsdlkasldkakjsdbnakjsfjab sfkja bsfkjabsfklabsfklafnlansflkansflansflkaknsflkansflkansflkansflaknsflkasfn"
  },
  
]

const MailBoxModal = ({modalIsOpen, setModal}:Props) => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#B6F09C',
          }
        }
      })
    const theme2 = createTheme({
        palette:{
            primary:{
                main:"#B6F09C"
            }
        },
        components: {
            MuiCheckbox: {
                
                styleOverrides:{
                    colorPrimary: {color:"#9B9C9E"},
                    root:({ownerState}) => ({
                        
                        ...(ownerState.checked === true && {
                            
                            color:"#B6F09C",
                        }
                        )
                        
                    }),
                }
            }
        }
    })

    const [searchInputField, setSearchInput] = useState<string>("")
    const [mailFnType, setMailFnType] = useState<"getMoreItems"| "searchForMails">()
    const [activeFiltered, setActiveFiltered ] = useState<any>([])
    const [items, setItems] = useState([])
    
    const [hasMoreItems, setHasMoreItems] = useState<boolean>(true)

    const searchForMails = async () => {
      // jeżeli poprzednie było wywołane zbieranie maili z db przez getMoreItems to czyścimy stan items i zbieramy nowe filtrowane dane 
      mailFnType ==="getMoreItems" && await new Promise(resolve => setItems([]))
      setMailFnType("searchForMails")
      console.log("searchForMails")
      console.log(items)
      setTimeout(() => {
        const currentItemsEndPosition = items.length
        const itemsToAdd = dummyMailItemsArr.filter((el,i) => {
              if(i > currentItemsEndPosition && i < currentItemsEndPosition +11) {
                  return el
                } else return 
            })
        itemsToAdd.length ? setItems([...items, ...itemsToAdd]) : setHasMoreItems(false)         
      },1500)   
      // TUTAJ BĘDZIEMY ŚCIĄGAĆ MAILE TYLKO KTÓRE ODPOWIADAJĄ WYSZUKIWANIU
    }

    const getMoreItems = (searchValue?:string) =>{
      setMailFnType("getMoreItems")
      console.log('getMoreItems')
        // SCROLL W DÓŁ BEZ WYPEŁNIONEGO SEARCH FIELDA   
        setTimeout(() => {
          const currentItemsEndPosition = items.length
          const itemsToAdd = dummyMailItemsArr.filter((el,i) => {
                if(i > currentItemsEndPosition && i < currentItemsEndPosition +11) {
                    return el
                  } else return 
              })
          itemsToAdd.length ? setItems([...items, ...itemsToAdd]) : setHasMoreItems(false)         
        },1500)         
      }
      useEffect(() => {
        items.length === 0 && getMoreItems()
      })
  return (
    <GlassModal modalIsOpen={modalIsOpen} header_title='MailBox' header_subtitle='Coś tam coś tam coś tam' setModal={setModal}>
      <ThemeProvider theme={theme}>
          <TextField
          onChange={(e) => setSearchInput(e.target.value)}
              color="primary"
              id="outlined-basic" 
              label="Search the box" 
              variant="filled" 
              sx={{input: {color:"#fff", background:"#131619", borderRadius:"10px 0 0 10px", margin:"0px", cursor:"pointer"}}}
              InputLabelProps={{style:{color:"white"}}} 
              InputProps={{endAdornment: <button onClick={e => {
                e.preventDefault()
                searchForMails()
              }} className='absolute right-0 h-full w-[60px] bg-[#0D0F10] rounded-r-[10px]'><SearchIcon color='primary'/></button>}}
          />            
      </ThemeProvider>
      <ModalScrollContainer stickyHeader='Mailbox' scrollActive={false}>
        <MailBoxScrollForm>
          <InfiniteScroll
            scrollableTarget={"MailBoxScrollForm"}
            dataLength={items.length}
            next={!searchInputField ? getMoreItems : searchForMails}
            hasMore={hasMoreItems}
            loader={<h4 className='text-white'>Loading...</h4>}
            endMessage={<h4 className='text-white'>There is no more mails for u</h4>}
          >
            {
              
              items.map((i, index) => (
                <MailItem 
                  sender={i.from}
                  topic={i.topic}
                  content={i.content}
                />
              ))
            }
          </InfiniteScroll>
        </MailBoxScrollForm>
        <button className='delete_all flex items-center justify-center gap-x-2 rounded-md px-6 py-2 w-fit bg-[#363A3D]'>
          <Image src={delete_red} className='w-[20px]' alt='delete all mails'/>
          <span className='w-fit font-normal whitespace-nowrap text-white'>Clear</span>
        </button>
      </ModalScrollContainer>
      <ModalFooter/>
    </GlassModal>
  )
}

export default MailBoxModal
          // <MailItem 
          //   sender='Mateusz W2'
          //   topic='Friend Request'
          //   content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          // />
          // <MailItem 
          //   sender='Mateusz W'
          //   topic='Friend Request'
          //   content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          // />

          // <MailItem 
          //   sender='Mateusz W'
          //   topic='Friend Request'
          //   content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          // />
          // <MailItem 
          //   sender='Mateusz W'
          //   topic='Friend Request'
          //   content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          // />
          // <MailItem 
          //   sender='Mateusz W'
          //   topic='Friend Request'
          //   content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          // />

          // <MailItem 
          //   sender='Mateusz W'
          //   topic='Friend Request'
          //   content=' z częścią wiadomosćiadsasdasdasdasdasdasdasdasdsdasdassafdasdasdasdasdasdasdasda'
          // />
             