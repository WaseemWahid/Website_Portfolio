import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://twitter.com/WaseemWahid" target="_blank" rel="noreferrer">
                    <BsTwitter/>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/waseem.wahid" target="_blank" rel="noreferrer">
                    <FaFacebookF/>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/_waseem_wahid_/" target="_blank" rel="noreferrer">
                    <BsInstagram/>
                </a>
            </div>
            <div>
                <a href="https://github.com/WaseemWahid" target="_blank" rel="noreferrer">
                    <ImGithub/>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia