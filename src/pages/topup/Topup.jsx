import React, { Component } from 'react'
import './topup.css'
import bkash from '../../icons/bkash.png'
import nagad from '../../icons/nagad.png'
import rocket from '../../icons/rocket.png'
import diamond from '../../icons/diamond.png'

function PaymentDiv(props){
    let paymentMethodF = props.method;
    if(paymentMethodF ==="bkash")
        {
            return (
                <div className="paymentContainer">
                    <p className="paymentTitle">বিকাশ</p>
                    <p className="paymentNumber">যে নাম্বারে টাকা পাঠাবেনঃ  01307085310</p>
                    <p className="paymentDescription">Bkash Personal</p>
                </div>
            )
        }
        else if(paymentMethodF ==="nagad")
        {
            return (
                <div className="paymentContainer">
                    <p className="paymentTitle">নগদ</p>
                    <p className="paymentNumber">যে নাম্বারে টাকা পাঠাবেনঃ  01307085310</p>
                    <p className="paymentDescription">Nagad Personal</p>
                </div>
            )
        }
        else if(paymentMethodF === "rocket"){
            return(
                <div className="paymentContainer">
                    <p className="paymentTitle">রকেট</p> 
                    <p className="paymentNumber">যে নাম্বারে টাকা পাঠাবেনঃ  01307085310</p>
                    <p className="paymentDescription">Rocket Personal</p>
                </div>
            )
        }
        else{
            return(
                <>
                </>
            )
        }  
}

export default class Topup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          paymentMethod: '',
          qunatity : 0,
          value : 0,
          payShow : false
        };
      }
    render() {
        return (
            <section className="topup-section">
                <div className="topupformTitle">
                    <h1>ডাইমন্ড টপ আপ</h1>
                </div>
                <div className="mainForm">
                    <form action="">
                        <div className="name">
                            <p className="nameTitle">আপনার নামঃ </p>
                            <input type="text" placeholder="Your Name" name='name' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">ঠিকানাঃ</p>
                            <input type="text" placeholder="Sirajganj" name='address' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">গেম উআইডি কোডঃ</p>
                            <input type="text" placeholder="123456789" name='uid' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">কত ডাইমন্ড নিতে চান?</p>
                            <div className="diamondCount">
                                <div className="25 diamnodCard"  onClick={()=> this.setState({qunatity:25,value:30})}>
                                    <p className="diamondCountTitle">২৫<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳৩০</p>
                                </div>
                                <div className="50 diamnodCard"   onClick={()=> this.setState({qunatity:50,value:55})}>
                                
                                    <p className="diamondCountTitle">৫০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳৫৫</p>
                                </div>
                                <div className="100 diamnodCard"  onClick={()=> this.setState({qunatity:100,value:100})}>
                                
                                    <p className="diamondCountTitle">১০০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳১০০</p>
                                </div>
                                <div className="310 diamnodCard"  onClick={()=> this.setState({qunatity:310,value:270})}>
                                
                                    <p className="diamondCountTitle">৩১০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳২৭০</p>
                                </div>
                                <div className="520 diamnodCard"  onClick={()=> this.setState({qunatity:520,value:450})}>
                                
                                    <p className="diamondCountTitle">৫২০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳৪৫০</p>
                                </div>
                                <div className="1060 diamnodCard"  onClick={()=> this.setState({qunatity:1060,value:900})}>
                                
                                    <p className="diamondCountTitle">১০৬০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳৯০০</p>
                                </div>
                                <div className="2180 diamnodCard"  onClick={()=> this.setState({qunatity:2180,value:1800})}>
                                
                                    <p className="diamondCountTitle">২১৮০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳১৮০০</p>
                                </div>
                                <div className="5600 diamnodCard"  onClick={()=> this.setState({qunatity:5600,value:4500})}>
                                
                                    <p className="diamondCountTitle">৫৬০০<img src={diamond} alt="" /></p>
                                    <p className="diamondValue">৳৪৫০০</p>
                                </div>

                            </div>
                        </div>
                        <div className="quantityShow">
                                <div className="paymentSelectContainer">
                                <p className="paymentSelect" style={{marginTop:25,marginBottom:25 }}>আপনি {this.state.qunatity} ডাইমন্ড নিতে চাচ্ছেন। আপনাকে { this.state.value} টাকা পাঠতে হবে। </p>
                                </div>
                        </div>

                        <did className="paymentMethod">
                            <div className="paymentImg">
                                <img src={bkash} value="bkash" alt="bkash" onClick={ () => this.setState({paymentMethod:"bkash"}) } />
                            </div>
                            <div className="paymentImg">
                                <img src={nagad} value="nagad" alt="nagad" onClick={ () => this.setState({paymentMethod:"nagad"}) } />
                            </div>    
                            <div className="paymentImg">
                                <img src={rocket} value="rocket" alt="rocket" onClick={ () => this.setState({paymentMethod:"rocket"}) } />
                            </div>
                        </did>
                        <PaymentDiv method={this.state.paymentMethod} />
                        <div className="name">
                            <p className="nameTitle">যে নাম্বার থেকে টাকা পাঠাবেনঃ</p>
                            <input type="text" placeholder="123xx-xxxxxx" name='number' />
                        </div>
                        <button className="topupFormSubmitBtn" type="submit">কিনুন</button>
                    </form>
                </div>
            </section>
        )
    }
}
