import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import QRCode from 'qrcode'
import {Button} from "@mui/material";
import {questions} from '../fakeData'


export default function BasicSelect() {
    const [question, setQuestion] = React.useState('')
    const [answer, setAnswer] = React.useState('');
    const [qrImage, setQrImage] = React.useState('')
    const [isPic, setIsPic] = React.useState(false)
    const [isGenerated, setIsGenerated] = React.useState(false)


    const handleChange = (event) => {
        setQuestion(event.target.value);
        const foundAnswer = questions.find((item) => item.question === event.target.value)
        if (foundAnswer) setAnswer(foundAnswer.answer)
        setIsGenerated(false)
        setIsPic(false)
    };

    const handleCode = () => {
        if (!answer) return;
        QRCode.toDataURL(answer).then((res) => {
            setQrImage(res)
        })
        setIsPic(true)
        setIsGenerated(true)
    }


    const GenerateUi = () => {
        return <Box
            sx={{textAlign: "center", paddingTop: '40%',}}>
            Please press a button</Box>
    }

    return (
        <Box>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Question</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={question}
                        label="Questions"
                        onChange={handleChange}
                    >
                        {questions.map((item) => <MenuItem sx={{fontSize:{
                            xs:"8px",
                            sm:'16px',
                            lg:"16px"
                            }}}  key={item.id}
                       value={item.question}>{item.question}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{
                width: "100%", height: '400px',
                borderStyle: 'solid', borderColor: isGenerated ? 'orange' : 'grey',
                mt: 3
            }}>
                {isPic ? <img style={{width: "100%"}} src={qrImage} alt='#'/> : <GenerateUi/>}
            </Box>
            <Box sx={{height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>{isPic && 'Thank you '}</Box>
            <Button sx={{mt: 1,width:"100%"}} variant={"outlined"} onClick={handleCode}>Generate</Button>
        </Box>
    );
}
