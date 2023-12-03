import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";
import { async } from "@firebase/util";
import AuthRoute from "../authrout";

const Team = () => {
  const [cart,setcart]=useState({})
  const [categ,setcateg]=useState([])
  const [mycart,setmycart]=useState([])
  const [appState, setAppState] = useAppContext()
  useEffect(()=>{
    const o =[]
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    setcateg(myArray)
    var my=myArray.forEach(et=>o.push({code:et.code,title:et.title}))
    setmycart(o)
       return myArrayFromLocalStorage
  },[])
  const onname = (e) => setcart({...cart,name:e.target.value,mycart:JSON.stringify(mycart)})
  const ontele = (e) => setcart({...cart,tele:e.target.value})
  const onemail = (e) => setcart({...cart,email:e.target.value})
  const onmsg = (e) => setcart({...cart,msg:e.target.value})
  const onsend = async(e)=>{
    e.preventDefault() 
      const docRef = await setDoc(doc(db, "orders", cart.tele), cart); 
      setcart({name:"",tele:"",email:"",msg:"",mycart:""}) 
      setcateg([])
      setmycart([])
      localStorage.removeItem("mycart")
      setAppState([])

    

  }

    return ( 
        <AuthRoute>
        <div className="w-100 p-0 m-0">
            <div className="mt-5">
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <title>فريق الدعم الفني</title>
   <link rel="icon" href="wew.png" type="image/x-icon" />
   <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'></link>
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
    </script>
    

    </div>
    <div className="w-100 p-5 row dir">
        <div className="col-12 col-lg-4 p-3 text-center row ">
            <p className="rounded text-center p-2 bg-info h5 text-light col-12 mb-1">
                جدول مشغل الفريق الرئيسي
            </p>
            {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مدير المشروع
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مساعد مدير المشروع 
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس كهرباء رئيسي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس ميكانيكا رئيسي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس إنشائي رئيسي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس معماري رئيسي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
        مهندس معماري رئيسي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مصمم داخلي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مؤرشف
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                إداري رئيسي
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
               مهندس عقود وتكاليف
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                حاسب كميات مدني
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                حاسب كميات إلكتروميكانيك
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس سلامة
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس تخطيط وجدولة
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                رسام معماري
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
               رسام معماري
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مصمم جرافيك
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مصمم جرافيك
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-success text-light col-12 col-lg-5">
                مهندس ميكانيك
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         
        </div>
        {/* --------------------------....................................................------------------------------- */}
        <div className="col-12 col-lg-4 p-3 text-center row ">
            <p className="rounded text-center p-2 bg-danger h5 text-light col-12 mb-1">
                جدول مشغل مهندسي المواقع
            </p>
            {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس مدني موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
           <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
            مهندس معماري موقع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
                مهندس كهرباء موقع
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success">
        <p className="rounded text-center bg-warning text-dark col-12 col-lg-5">
                مهندس ميكانيكا موقع
            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        
         
        </div>
        {/* -************************************************************************************************************ */}
        <div className="col-12 col-lg-4 p-3 text-center  h14 ">
            <p className="rounded text-center p-2 bg-dark h5 text-light col-12 mb-1">
                جدول مشغل الفريق
            </p>
            {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success h15">
        <p className="rounded text-center bg-dark text-light col-12 col-lg-5">
            مهندس مشروع            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="col-12 row mb-1 bg-light p-1 border-1 border-success h15">
        <p className="rounded text-center bg-dark text-light col-12 col-lg-5">
            مهندس مدني             </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success h15">
        <p className="rounded text-center bg-dark text-light col-12 col-lg-5">
            مهندس معماري            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
         {/* ---------------------------------------------- */}
         <div className="col-12 row mb-1 bg-light p-1 border-1 border-success h15">
        <p className="rounded text-center bg-dark text-light col-12 col-lg-5">
            مهندس كهربا            </p>  
            <div className="col-12 col-lg-7 row ">
            <p className="rounded text-center  col-10">
             لم يتم تعيين بعد         </p>  
             <i class="fas col-2 fa-2x fa-user-tie"></i>            </div>
        </div>
        {/* ---------------------------------------------- */}
        
        
         
        </div>
        {/* -************************************************************************************************************ */}
    </div>
    </div>
    </AuthRoute>
     );
}
 
export default Team;