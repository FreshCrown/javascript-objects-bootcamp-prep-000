var playlist = {
  artistName:"",
  songTitle:"",
  

}

function updatePlayList(obj, key, value){
   return Object.assign({}, obj, { [key]: value })
}