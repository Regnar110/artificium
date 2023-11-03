import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import delete_red from '../../../../../public/controller/delete_red.svg'
import { ThemeProvider } from '@emotion/react';
import ModalFooter from '../Components/ModalFooter';
import GlassModal from '../GlassModal/GlassModal';
import ModalScrollContainer from '../Components/ModalScrollContainer';
import MailBoxScrollForm from '../Components/MailBoxScrollForm';
import MailItem from './components/MailItem';
import { TextField, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReactPaginate from 'react-paginate';

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

  const [mails, setMails] = useState<{_mailId:string, type:String, from:string, topic:string, content:string}[]>([])
  const [totalMailsCount, setTotalMailsCount] = useState<number>(0)
  const [itemOffset, setItemOffset] = useState(0);
  
    let itemsPerPage = 10
    
    
    const pageCount = Math.ceil(dummyMailItemsArr.length / itemsPerPage);

    const handlePageClick = (event) => {
      // TUTAJ Będziemy ściągać kolejne itemy dla każdej kolejnej strony.
        
        
        const newItemOffset = event.selected *10
        const endOffset = newItemOffset + itemsPerPage;
        console.log(`previous offset is ${itemOffset}`)
        console.log(`Loading items from ${newItemOffset} to ${endOffset}`);
        
        // current items będzie hitem do endpointa API
        const currentItems = dummyMailItemsArr.slice(newItemOffset, endOffset);
        
        console.log(currentItems)
        setMails(currentItems)

        //OK
        const newOffset = (event.selected * itemsPerPage) % totalMailsCount;

        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);

    };
    useEffect(() => {
      // Tutaj będziemy inicjalizować pierwsze 10 maili w skrzynce 
      const initialTenMail = dummyMailItemsArr.slice(itemOffset, itemsPerPage)
      setMails(initialTenMail)

      // plus ściągniemy informacje na temat całkowitej ilości maili zawartych w skrzynce
      setTotalMailsCount(dummyMailItemsArr.length)
    },[])

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
              }} className='absolute right-0 h-full w-[60px] bg-[#0D0F10] rounded-r-[10px]'><SearchIcon color='primary'/></button>}}
          />            
      </ThemeProvider>
      <ModalScrollContainer stickyHeader='Mailbox' scrollActive={false}>
          <MailBoxScrollForm>
            {mails && mails.map(mail => (
              <MailItem
                sender={mail.from}
                topic={mail.topic}
                content={mail.content}
              />
            ))}    
          </MailBoxScrollForm>

          <div className='mail_scroll options flex items-center justify-between'>
            <ReactPaginate
            className='text-white flex w-fit gap-2'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />      
            <button className='delete_all flex items-center justify-center gap-x-2 rounded-md px-6 py-2 w-fit bg-[#363A3D]'>
              <Image src={delete_red} className='w-[20px]' alt='delete all mails'/>
              <span className='w-fit font-normal whitespace-nowrap text-white'>Clear</span>
            </button>    
          </div>
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
             