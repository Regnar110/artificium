import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import delete_red from '../../../../../public/controller/delete_red.svg'
import { ThemeProvider } from '@emotion/react';
import ModalFooter from '../Components/ModalFooter';
import GlassModal from '../GlassModal/GlassModal';
import ModalScrollContainer from '../Components/ModalScrollContainer';
import MailBoxScrollForm from '../Components/MailBoxScrollForm';
import MailItem from './components/MailItem';
import { Checkbox, createTheme, TextField } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    const [items, setItems] = useState(dummyMailItemsArr.slice(0, 11))
    const [activeFiltered, setActiveFiltered ] = useState<any>([])
    const [hasMoreItems, setHasMoreItems] = useState<boolean>(true)

    const getMoreItems = (input:string) =>{
      if(input) {



        // JEŻELI SCROLLUJEMY W DÓŁ Z WYPEŁNIONYM SEARCH FIELDEM
        // PRZY ŚCIĄGANIU ELEMENTÓW UWZGLĘDNIAMY WYPEŁNIONY SEARCH FIELD
        
        //filtr bazowych itemów ( filtrujemy też to co mamy)
        // aktualna pozycja końcowa
      
        
        // ściągamy nowe maile z uwzględnieniem filtra
        const itemsFromDummyArrWIthFilter = dummyMailItemsArr.filter((el,i) => el.from.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
        console.log(itemsFromDummyArrWIthFilter)
        const mixedArr = [...items, ...itemsFromDummyArrWIthFilter].filter((element,index, self) => self.indexOf(element) === index)
        setItems(itemsFromDummyArrWIthFilter)
      
      
      
      } else {
        // SCROLL W DÓŁ BEZ WYPEŁNIONEGO SEARCH FIELDA   
        setTimeout(() => {
          const currentItemsEndPosition = items.length
          const itemsToAdd = dummyMailItemsArr.filter((el,i) => {
                if(i > currentItemsEndPosition && i < currentItemsEndPosition +11) {
                  return el
                } else return
              })
          itemsToAdd.length ? setItems([...items, ...itemsToAdd]) : setHasMoreItems(false)
          setItems([...items, ...itemsToAdd])
          console.log(itemsToAdd)          
        },1500)         

      }
    }
    useEffect(() => {
      searchInputField&& getMoreItems(searchInputField)
    },[searchInputField])
  return (
    <GlassModal modalIsOpen={modalIsOpen} header_title='MailBox' header_subtitle='Coś tam coś tam coś tam' setModal={setModal}>
      <ThemeProvider theme={theme}>
          <TextField
          onChange={(e) => setSearchInput(e.target.value)}
              color="primary"
              id="outlined-basic" 
              label="Search the box" 
              variant="filled" 
              sx={{input: {color:"#fff", background:"#131619", border:"1px solid #363A3D", borderRadius:"10px", margin:"0px", cursor:"pointer"}}}
              InputLabelProps={{style:{color:"white"}}} 
          />            
      </ThemeProvider>
      <ModalScrollContainer stickyHeader='Mailbox' scrollActive={false}>
        <MailBoxScrollForm>
          <InfiniteScroll
            scrollableTarget={"MailBoxScrollForm"}
            dataLength={items.length}
            next={()=>getMoreItems(searchInputField)}
            hasMore={hasMoreItems}
            loader={<h4 className='text-white'>Loading...</h4>}
            endMessage={<h4 className='text-white'>There is no more mails for u</h4>}
          >
            {
              searchInputField ? 
              activeFiltered.map((i, index) => (
                <MailItem 
                  sender={i.from}
                  topic={i.topic}
                  content={i.content}
                />
              ))
              :
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
             