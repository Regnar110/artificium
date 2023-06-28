import React from 'react'
import Image from 'next/image'
import search from '../../../../../../public/Dashboard/UserPanel/General/search.svg'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const SearchOption = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#82DBF7',
          }
        }
      })
  return (
    <div className='search_option'>
        <Box className="gap-4 relative" sx={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
            <Image className='w-[25px]' src={search} alt='search'/>
            <ThemeProvider theme={theme}>
                <TextField 
                size='small'
                color='primary'
                    sx={{input:{color:"#fff", '&.Mui-checked': {color:"#B6F09C"}}}}
                    id="input-with-sx" 
                    label="Search"
                    InputLabelProps={{style:{color:"#fff"}}} 
                    variant="standard" 
                />                
            </ThemeProvider>
        </Box>
    </div>
  )
}

export default SearchOption
