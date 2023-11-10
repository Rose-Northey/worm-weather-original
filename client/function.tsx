export default function interpretMoisture(data: number){
const interpretation = {words: "", image:""}
  if (data >=0.3){
    interpretation.words = "so soggy"
    interpretation.image = "../client/images/wet.png"
  }else if (data <= 0.2){
    interpretation.words="ouchy dry"
    interpretation.image="../client/images/moist.png"
  }else{
    interpretation.words="deliciously moist"
    interpretation.image="../client/images/moist.png"
  }
  return interpretation
}