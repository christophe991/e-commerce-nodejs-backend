module.exports.signUpErrors = (err) =>{
    let errors = {name: "", firstname: "", email: "", password: "", street: "", number: "", city: "", postalcode: "", country: ""}
    if(err.message.includes("email"))errors.email = "Email incorrect"
    if(err.code === 11000 && Object.keys(err.KeyValue)[0].includes("email"))
    errors.email = "Cet adresse email est déjâ enregistré"
    if(err.message.includes("password"))
    errors.password = "Le mot de passe doit contenir au moins 6 caractères minimum"
    return errors
}

module.exports.signInErrors =(err) =>{
    let errors = {email : '', password: ''}
    if(err.message.includes("email"))
    errors.email = "Email ou mot de passe inconnu"
    if(err.message.includes("password"))
    errors.password = "Email ou mot de passe inconnu"
    return errors
}

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: ""}

    if(err.message.includes('Image invalide'))
    errors.format = "Format incompatible"

    if(err.message.includes('max size'))
    errors.maxSize = "Le fichier dépasse 500Ko"

    return errors
}

