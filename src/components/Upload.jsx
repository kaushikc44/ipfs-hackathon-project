import React, {useState} from "react";
import { Web3Storage,getFilesFromPath,makeStorageClient } from 'web3.storage';


function Upload() {

    const [name,setName] = useState("");
    const [selectedFile,setSelectedFile] = useState();
    const [isFilePicked,setIsFilePicked] = useState(false);


    function makeStorageClient () {
        return new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhBNEUwN2VCNEQ5ZDZCZGZCODk2M2IwNzZCMDQzMGU3NDU4YzZEOEIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk3OTgwNTM5MTksIm5hbWUiOiJJbml0aWFsIElGUFMifQ.PinAMyv3tEdaJ3TOpPDe-yDX8wtDkRrpEXnPIqVqAKE" })
      }
      let files = "";

    const changeHandler = (event) => {
        files = event.target.files;

    }

    //File selection
    const handleSubmission = async (event) => {
        const client = makeStorageClient()
        
        
        const cid = await client.put(files);
        console.log('stored files with cid:', cid)
        // setSelectedFile(event.target.files);
        // setIsFilePicked(true);
        // let files = URL.createObjectURL(event.target.files[0]);
        // console.log(files);
        
        // let reader = new FileReader();
        // const value = reader.readAsDataURL(files[0]);
        console.log("Selected file");
    };
    // const handleSubmission = async  () => {
    //   const client = new Web3Storage({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhBNEUwN2VCNEQ5ZDZCZGZCODk2M2IwNzZCMDQzMGU3NDU4YzZEOEIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk3OTgwNTM5MTksIm5hbWUiOiJJbml0aWFsIElGUFMifQ.PinAMyv3tEdaJ3TOpPDe-yDX8wtDkRrpEXnPIqVqAKE"});
    //   const files = await getFilesFromPath(selectedFile);
    //   console.log(files);
    //   const CID  = await client.put(files);
    //   console.log(CID)

    // };

    return (
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
                <div>
                    {/* <p>File: {selectedFile.name}</p>
                    <p>FileType: {selectedFile.type}</p> */}
                </div>
                
            </div>
		</div>
    )
}

export default Upload;