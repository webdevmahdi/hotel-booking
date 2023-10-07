import React from 'react';
import './Home.css';
import room1 from '../../assets/room1.jpg';
import room2 from '../../assets/room2.jpg';
import room3 from '../../assets/room3.jpg';
import { FaBed } from "react-icons/fa";
// import navPhoto from '../../assets/navPhoto.jpg'

const Home = () => {
    return (
        <div>
            <nav>
                <h1 className='page-tittle'>Welcome to our hotel</h1>
                <p className='welcome-massage'>Choose your best room for a batter vacation. World best luxurious hotel ever. Have a good vacation</p>
            </nav>
            <main>
                <div className="room-1">
                    <img src={room1} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sint dignissimos repellendus officiis totam illo, vel optio ratione tempore saepe.</p>
                    <div>
                        <div>
                            <p><FaBed></FaBed></p>
                            <p>2 X <FaBed></FaBed></p>
                            <p><FaBed></FaBed></p>
                        </div>
                        <button>Book</button>
                    </div>
                </div>
                <div className="room-2">
                    <img src={room2} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sint dignissimos repellendus officiis totam illo, vel optio ratione tempore saepe.</p>
                    <div>
                        <div>
                            <p><FaBed></FaBed></p>
                            <p><FaBed></FaBed></p>
                            <p><FaBed></FaBed></p>
                        </div>
                        <button>Book</button>
                    </div>
                </div>
                <div className="room-3">
                    <img src={room3} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sint dignissimos repellendus officiis totam illo, vel optio ratione tempore saepe.</p>
                    <div>
                        <div>
                            <p><FaBed></FaBed></p>
                            <p>2 X <FaBed></FaBed></p>
                            <p><FaBed></FaBed></p>
                        </div>
                        <button>Book</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home