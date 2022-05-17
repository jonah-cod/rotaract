import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


interface Items{
            name:string;
            description: string
        }
interface prop{
        item: Items;
    }

const Item:React.FC<prop> = ({item})=>
{
    console.log('loaded')
    return (
        <Paper>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
const Caurosel = () => {
    
    const items= [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
  return (
    <Carousel>
        { items.map( (item, i) => <Item key={i} item={item} />) }
        
    </Carousel>
  )
}

export default Caurosel