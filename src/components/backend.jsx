import React from "react";
import { Web3Storage } from 'web3.storage';

const client = new Web3Storage({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhBNEUwN2VCNEQ5ZDZCZGZCODk2M2IwNzZCMDQzMGU3NDU4YzZEOEIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk3OTgwNTM5MTksIm5hbWUiOiJJbml0aWFsIElGUFMifQ.PinAMyv3tEdaJ3TOpPDe-yDX8wtDkRrpEXnPIqVqAKE"})


function Upload(props){

    const upload = async () => {
      //enter the file path here
      const files = await getFilesFromPath("enter the files path ")
      const CID  = await client.put(files);

    }

    //please write the retunr path here to display it on the screen 
  
}