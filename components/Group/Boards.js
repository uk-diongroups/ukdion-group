import Image from 'next/image';
import React from 'react';


const Boards = () => {
    return (
        <div className="board_of_directors container">
            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/boss.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Michael Diongoli</p>
                        <p className="board_position">Group Managing Director/ Chief Executive Officer</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/dakore.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Dakore Egbuson-Akande</p>
                        <p className="board_position">Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/fredrick.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Fredrick Endorokeme Owotorufa</p>
                        <p className="board_position">Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/aliliele.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Sir Chime Aliliele</p>
                        <p className="board_position">Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/osiri.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Osiri N. Wisdom</p>
                        <p className="board_position">Independent Non-Executive Director</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/nnenna.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Nnenna H. Ikubogh</p>
                        <p className="board_position">Executive Director, Strategy</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/adaeze.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Adaeze S. Ejionye</p>
                        <p className="board_position">Executive Director, Sales</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/chukwuka.jpg" alt=""/>
                    <div className="text-center">
                        <p className="board_name">Chukwuka Chukwuma</p>
                        <p className="board_position">Executive Director, Revenue</p>
                    </div>
                </a>
            </div>

            <div className="plenty_images">
                <a href="/about">
                    <img src="/images/boardOfDirectors/saidi.jpg" alt=""/>
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