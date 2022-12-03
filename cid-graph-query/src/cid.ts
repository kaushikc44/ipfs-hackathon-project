import {fileUploaded} from "../generated/Cid/Cid"
import {User,File} from "../generated/schema"

export function handleFileUploaded(event: fileUploaded): void {
  let user = User.load(event.params.user.toHexString())
  if(user == null){
    user = new User(event.params.user.toHexString())
    user.save()
  }

  let file = new File(event.params.cid)
  file.name = event.params.name
  file.fileType = event.params.fileType
  file.createdAt = event.params.createdAt.toString()
  file.updateAt = event.params.updatedAt.toString()
  file.user = user.id
  file.save()
}