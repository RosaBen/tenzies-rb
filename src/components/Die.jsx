export default function Die({value, isHeld}){
  const styles={
    backgroundColor: isHeld? "#59E391" : "white"
  }
  return(
    <>
  <button className="dieElement" type="button" style={styles} >{value}</button>
    </>
  )
}