const whoamiHandler = (req,res)=>{
  const {['accept-language']:lang,['user-agent']:software}= req.headers;
  res.json({
    ipaddress:req.ip,
    language:lang,
    software:software,
    
  })
}

module.exports = {
  whoamiHandler,
}