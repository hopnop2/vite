import Navbar from './component/navbar';
import Card from './component/card'

export default function App() {
  return (
    <>
<Navbar />
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</div>

    
    </>
 
     
    
  
  )
}