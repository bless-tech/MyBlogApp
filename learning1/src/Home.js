import React from 'react'
import PostData from './Post.json'

function Home() {
    return (
        <div>
            <h1>Hello Blog</h1>
            <div>
                {
                    PostData.map((Post,index) => (
                        <div>
                            <h1>{Post.title}</h1>
                            <h2>{Post.des}</h2>
                        </div>)
                    )
                }
            </div>
    </div>
    )
}

export default Home


