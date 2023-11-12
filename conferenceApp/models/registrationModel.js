const registrations = [];

function addRegistration(fullname, email, phone, confirmation) {
    const newRegistration = { fullname, email, phone, confirmation: confirmation === 'yes' };
    registrations.push(newRegistration);
    return registrations;
}

function getAllRegistrations() {
    return registrations;
}

module.exports = { addRegistration, getAllRegistrations };