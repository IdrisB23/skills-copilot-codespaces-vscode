function skillsMember() {
  // Skills
  var skills = {
    // Properties
    name: 'Member',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript'],
    // Methods
    greet: function() {
      console.log('Hello, I\'m ' + this.name);
    },
    learn: function(skill) {
      this.skills.push(skill);
    }
  };

  // Return the skills object
  return skills;
}