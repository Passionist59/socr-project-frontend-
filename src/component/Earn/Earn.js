import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Luna from '../../assets/images/luna.png';
import Ust from '../../assets/images/ust.png';


export default function Earn() {
    return(
        <Container className='content-container'>
            <div className='title-container'>
                <h1>EARN<span className='docs-container'> Docs</span></h1>
            </div>

                {/* Deposit withdraw button container */}
            <div className='deposit-container'>
                <h5 style={{fontWeight:'650', marginBottom:'0px'}}>TOTAL DEPOSIT</h5>
                <h2>532,875 <span style={{fontSize:'18px', fontWeight:'650'}}>UST</span></h2>
                <div className='deposit-withdraw-container1'>
                    <Button className='deposit-btn'>Deposit</Button>
                    <Button className='withdraw-btn'>Withdraw</Button>
                </div>
            </div>

                {/* UST/LUNA container */}
            <div className='ust-luna-container'>
                <div className='ust-container'>
                    <Image src={Ust} alt='UST' style={{width:"30%"}}/>
                    <h2 style={{marginBottom:'20px'}}>UST</h2>
                    <div className='apr-container'>
                        <Button>APR</Button>
                        <p>34.87%</p>
                    </div>
                    <hr style={{marginTop:'8%'}} />

                    <div className='deposit-withdraw-container2'>
                        <Button className='deposit-btn'>Deposit</Button>
                        <Button className='withdraw-btn'>Withdraw</Button>
                    </div>
                </div>

                <div className='luna-container'>
                    <Image src={Luna} alt='LUNA' style={{width:"15%"}}/>
                    <h2 style={{marginBottom:'20px'}}>LUNA</h2>
                    <div className='apr-container'>
                        <Button>APR</Button>
                        <p>14.87%</p>
                    </div>
                    <hr style={{marginTop:'8%'}} />

                    <div className='deposit-withdraw-container2'>
                        <Button className='deposit-btn'>Deposit</Button>
                        <Button className='withdraw-btn'>Withdraw</Button>
                    </div>
                </div>
            </div>

                {/* Expected invest */}
            <div className='expected-container'>
                <h5 style={{fontWeight:'650', marginBottom:'0px'}}>EXPECTED INTEREST BASED ON YOUR DEPOSIT</h5>
                <h2>432,875 <span style={{fontSize:'18px', fontWeight:'650'}}>UST</span></h2>
                <div className='period-btn-container'>
                    <Button>YEAR</Button>
                    <Button>MONTH</Button>
                    <Button>WEEK</Button>
                    <Button>DAY</Button>
                </div>
            </div>
            
        </Container>
    )
}