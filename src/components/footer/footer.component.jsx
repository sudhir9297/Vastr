import React from 'react'
import './footer.styles.scss'

const Footer=()=>{

    const logo=[
        {
            src:
            require('../../assets/images/fb.png')
        },
        {
            src:
            require('../../assets/images/insta.png')
        },
        {
            src:
            require('../../assets/images/twi.png')
        },
        {
            src:
            require('../../assets/images/yt.png')
        },
        
    ]
     const contacts=[
         { 
            id:0,
            type:"WHATSAPP",
            value:7020901593
        },
        {
            id:1,
            type:"MOBILE",
            value:7020901593    
        },
        {  
            id:2,
            type:" E-MAIL",
            value:"sudhir9297@gmail.com"  
        },
        {
            id:3,
            type: " FREE-RETURN",
            value:"30 DAYS POLICY"    
        },
        {
            id:4,
            type: " FAST SHIPPING",
            value:" 1000 RUPEES ON ALL ORDERS"
        },
        {
            id:4,
            type:" FAST DELIVERY",
            value:"4-6 BUSINESS DAYS"
        }
        ]
    return(
        <div className="footer-container">
            <div className="contact-1">
                <div>
                {
                    contacts.slice(0,3).map((list)=>
                    <div className="contact-Item-container" key={list.id}>
                        <div className="type">{list.type}</div>
                        <div className="value">{list.value}</div>   
                    </div>
                    )
                }
                </div>
                <div>
                {
                    contacts.slice(3,6).map((list)=>
                    <div className="contact-Item-container" key={list.id}>
                        <div className="type">{list.type}</div>
                        <div className="value">{list.value}</div>   
                    </div>
                    )
                }
                </div>
            </div>
            <div className="contact-2">
            {
                logo.map((item)=><div className="logo-container"><img src={item.src} /></div>)    
            }
            </div>
        </div>
    )
}

export default Footer;