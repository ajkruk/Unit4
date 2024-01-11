// Add a person to the collection. You pick the data, but they should have an empty array for children.
db.people.insertOne({ first_name: 'Natasha', last_name: 'Romanoff', email: 'blackwidow85@avengers.org', gender:'Female', children: []})

//Add another person. They should have at least two children.
db.people.insertOne({ first_name: 'Clint', last_name: 'Barton', email: 'hawkeye80@avengers.org', gender:'Male', children: [{name: 'Lila', age: '13'}, {name: 'Cooper', age: '10'}]})

//Update one person named Clarence. He moved from North Dakota to South Dakota.
db.people.updateOne({first_name: 'Clarence'},
{ $set: {state: 'South Dakota'}})

//Update Rebecca Hayes. Remove her email address.
db.people.updateOne({first_name: 'Rebecca', last_name: 'Hayes'},
{ $set: {email: ''}})
