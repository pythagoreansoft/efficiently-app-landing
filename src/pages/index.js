import React from 'react'
import Card from '../components/Card'


const Home = () => {
    return (
        <>
            <div className="grid justify-items-stretch">
                <Card 
                    title='Plan'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <Card 
                    title='Work'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                
            </div>
        </>
    )
}

export default Home
