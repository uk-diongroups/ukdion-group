import Image from 'next/image';
import React from 'react';


const Boards = () => {
    return (
        <div className="board_of_directors container">
            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/BOSS.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Michael Diongoli</p>
                        <p className="board_position">Group Managing Director/ Chief Executive Officer</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Dakore Egbuson-Akande.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Dakore Egbuson-Akande</p>
                        <p className="board_position">Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Fredrick Endorokeme Owotorufa.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Fredrick Endorokeme Owotorufa</p>
                        <p className="board_position">Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Aliliele, Chimerem Felix.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Sir Chime Aliliele</p>
                        <p className="board_position">Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Osiri Wisdom.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Osiri N. Wisdom</p>
                        <p className="board_position">Independent Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Nnenna H. Ikubogh.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Nnenna H. Ikubogh</p>
                        <p className="board_position">Executive Director, Strategy</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/adaeZE S. ejionye.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Adaeze S. Ejionye</p>
                        <p className="board_position">Executive Director, Sales</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Chukwuka Chukwuma.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Chukwuka Chukwuma</p>
                        <p className="board_position">Executive Director, Revenue</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <Image width="300" height="350" src="/images/IMAGE OF THE BOARD OF DIRECTORS/Saidi Olapade.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Saidi Olapade</p>
                        <p className="board_position">Managing Director, MFB</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Boards;