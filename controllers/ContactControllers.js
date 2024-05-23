//@desc Get all Contacts
//@route Get /api/contacts
//@access public

const getContact=(req,res)=>{
    res.status(200).json({message:"Get all Contacts"});
};

//@desc Post all Contacts
//@route Post /api/contacts
//@access public

const createContact=(req,res)=>{
    res.status(200).json({message:"Create Contacts"});
};

//@desc Update Contacts
//@route Put /api/contacts/:id
//@access public

const updateContact=(req,res)=>{
    res.status(200).json({message:`Update for ${req.params.id}`});
};

//@desc delete Contacts
//@route Delete /api/contacts/:id
//@access public

const deleteContact=(req,res)=>{
    res.status(200).json({message:`Delete for ${req.params.id}`});
}


module.exports={getContact,createContact,updateContact,deleteContact}