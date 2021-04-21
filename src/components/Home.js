import React from 'react';



const Home = () => {
    return (<>
        <div>
            <div className="add-to-cart">
            <img src="https://media.istockphoto.com/vectors/cart-trolley-vector-id1289126373?s=612x612"/>
            
            </div>
            <h1>Home Components</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://source.unsplash.com/collection/190727/500x400" alt="onlinemobile"/>

                </div>

                <div className="text-wrapper item">
                    <span>IPhone</span>
                    <span>Price : $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Card</button>
                </div>

            </div>
        </div>
    </>);
};



export default Home;
