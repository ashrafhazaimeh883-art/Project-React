 import Header from "./component/Header";
 import StudentCard from "./component/StudentCard";
 import Footer from "./component/Footer.jsx";

 function App() {
 
  return (
    <>
    <Header />
    <StudentCard name="ashraf"
    age="22"
    major="Computer Science"
    graduated="NO"
     />
      <StudentCard  number="second"
      name="Omar"
    age="18"
    major="Dentist"
    graduated="No"
     />
      <StudentCard number="third"
       name="Sara"
    age="25"
    major="Physics"
    graduated="True"
     />
     <Footer />

     

    </>
  )
}
export default App

