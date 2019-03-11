

const nameOptions = {
  stringsElement: '#typed-name',
  typeSpeed: 40,
  startDelay: 1500,
  showCursor: false
}

const ageOptions = {
  stringsElement: '#typed-age',
  typeSpeed: 40,
  startDelay: 3500,
  showCursor: false
}

const strengthsOption = {
  stringsElement: '#typed-strengths',
  typeSpeed: 40,
  startDelay: 5000,
  showCursor: false

}

const weaknessesOption = {
  stringsElement: '#typed-weaknesses',
  typeSpeed: 40,
  startDelay: 9000,
  showCursor: false
}

const weaponOption = {
  stringsElement: '#typed-weapon',
  typeSpeed: 40,
  startDelay: 11500,
  showCursor: false
}

const name = new Typed('#name', 
nameOptions)
const age = new Typed('#age', ageOptions);
const strengths = new Typed('#strengths', strengthsOption)
const weaknesses = new Typed('#weaknesses', weaknessesOption)
const weapon = new Typed('#weapon', weaponOption)