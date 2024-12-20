import React from 'react'
import Card from '../../Card'

const Page = () => {

  const users = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 29,
      "profession": "Software Developer",
      "profile_photo": "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      "name": "Michael Brown",
      "city": "Los Angeles",
      "age": 34,
      "profession": "Graphic Designer",
      "profile_photo": "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
      "name": "Sophia Davis",
      "city": "Chicago",
      "age": 27,
      "profession": "Marketing Specialist",
      "profile_photo": "https://randomuser.me/api/portraits/women/27.jpg"
    },
    {
      "name": "James Wilson",
      "city": "Houston",
      "age": 41,
      "profession": "Project Manager",
      "profile_photo": "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      "name": "Olivia Martinez",
      "city": "San Francisco",
      "age": 25,
      "profession": "UX Designer",
      "profile_photo": "https://randomuser.me/api/portraits/women/25.jpg"
    }
  ]

  return (
    <>
    {/* Props... */}

    {/* <div>Page hai bhai apan!</div>
    <Card user='Sarthak'/>
    <Card user='Harsh'/>
    <Card user='Manisha'/> */}

    <div className='p-10'>
          {users.map(function(elem,idx){
            return <Card key={idx} name={elem.name} city={elem.city} age={elem.age} photo = {elem.profile_photo}/>
          })}
    </div>  
    

    </>
    
  )
}

export default Page