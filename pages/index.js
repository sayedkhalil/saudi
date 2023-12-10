   
import Head from 'next/head'
import Image from 'next/image'
import About from '../layout/about'
import Cover from '../layout/cover'
import NEw from '../layout/new'
import Opnion from '../layout/opnion'
import Partener from '../layout/partener'
import Productes from '../layout/productes'
import styles from '../styles/Home.module.css'
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AuthRoute from "../authrout";


export default function Home({getdata}) {
  return (
    <AuthRoute>

    <div>
      <Head>
        <title>{getdata.getinfo.name}</title>
        <meta name="description" content={getdata.getinfo.des} />
        <meta name="keywords" content={getdata.getinfo.key} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
        <link rel="icon" href={getdata.getinfo.logo} type="image/x-icon" />
        <meta name="google-site-verification" content="_OtuybINzdg_u7HN4n2xCk83du_TC8CdaKcPR0p-2Bg" />
      </Head>
          <Cover data={getdata.getcov} />
          <div className={styles.container}>
          <NEw data={getdata.products} />
          
          </div>
    </div>
    </AuthRoute>
  )
}
export async function getServerSideProps(){
  const de=[]
  const opnionarr=[]
  const pro=[]
  const neww =[]
  const infoRef = doc(db, "info", "info");
  const infoSnap = await getDoc(infoRef)
  const getinfo =  infoSnap.data()?infoSnap.data().info:{}
  const docRef = doc(db, "cover", "cover");
  const docSnap = await getDoc(docRef);
  const getcover =  docSnap.data()?docSnap.data().covers:[]
  const docRefpar = doc(db, "partn", "partn");
  const docSnapar = await getDoc(docRefpar);
  const getpartn =  docSnapar.data()?docSnapar.data().partns:[]
  const codelist = collection(db, 'category');
  const codesnapshot = await getDocs(codelist);
  const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
  const prodlist = collection(db, 'broductes');
  const prodsnapshot = await getDocs(prodlist);
  const products =async()=>await prodsnapshot.docs?prodsnapshot.docs.map(doc =>{ pro.push({code:doc.data().code,
  title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0],telee:doc.data().telee?doc.data().telee:"0",datee:doc.data().datee?doc.data().datee:"0",job:doc.data().job?doc.data().job:"",timee:doc.data().timee?doc.data().timee:"0",valuee:doc.data().valuee?doc.data().valuee:"0"});   }):[]
  const opnion = collection(db, 'opnion');
  const opnionsnap = await getDocs(opnion);
  const getopnion =async()=> opnionsnap?opnionsnap.docs.map(doc =>{opnionarr.push(doc.data());   }):[];
  products()
  getopnion()  
  const newlist = collection(db, 'broductes');
  const n= query(newlist, where("category", "==","أبواب حديد"));
  const nprodsnapshot= await getDocs(n);
   nprodsnapshot?nprodsnapshot.forEach(doc =>{ neww.push({code:doc.data().code,
      title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0]})  }):neww
     return{
      props:{getdata:{data:de,products:pro,getcov:getcover,getpart:getpartn,getopn:opnionarr,getinfo:getinfo,getnew:neww}}
           }
}

