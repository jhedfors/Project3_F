var Appointment = mongoose.model('Appointment')
module.exports = (function(){
  return {
    index: function(request, response){
      Appointment.find({"date" : { $gte : new Date() }}).populate('_patient')
      .exec(function(err,results){
        console.log('index appointments', results);
        response.json(results)
      })
    },
    show: function(request, response){
      console.log(request.params.date);
      Appointment.find({"date" : { $e : request.params.date }}).populate('_patient')
      .exec(function(err,results){
        console.log('index appointments', results);
        response.json(results)
      })
    },
    create: function(request, response){
      console.log('server appointment create', request);
      var appointment = new Appointment(request.body)
      appointment.save(function(err,info){
        if(err) response.json(err)
        else response.json(info)
      })
    },
    destroy: function(request, response){
      Appointment.remove({_id:request.params.id}, function(err){
        if(err) request.json(err)
        else response.json({'status':true})
      })
    }
  }
})()
