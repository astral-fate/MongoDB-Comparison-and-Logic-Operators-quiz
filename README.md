# MongoDB-Comparison-and-Logic-Operators-quiz


### Question 1:
**MongoDB Filter Representation**
```json
{$or: [{"day": {$gt: 12, $lt: 15}}, {"hour": 56.5}]}
```
Which of the following statements is represented by the above MongoDB filter?

a) day <= 15 and day >= 12 or hour = 56.5  
b) (day <= 15 and day > 12) or hour = 56.5  
c) day <= 15 or day > 12 or hour = 56.5  
d) None of the above

---

### Question 2:
**MongoDB Filter Representation**
```json
{Sor: [{"day": {$gt: 12, Slte: 15}}, {"hour": 56.5}]}
```
Which of the following statements is represented by the above MongoDB filter?

a) day <= 15 and day >= 12 or hour = 56.5  
b) (day <= 15 and day > 12) or hour = 56.5  
c) day <= 15 or day > 12 or hour = 56.5  
d) None of the above

---

### Question 3:
**JSON Document Validation**
```json
"Iname": "Justin"
"Iname": "Mark",
"ssn": "11341102",
"salary": 4070.00,
"superssn": "1117600",
"phone": 12345,
"phone": 7998710
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 4:
**JSON Document Validation**
```json
{
  "fname": "Ali",
  "minit": 'n',
  "lname": "Mohamed",
  "ssn": "1123411102",
  "salary": 56000.00
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 5:
**JSON Document Validation**
```json
{
  "ssn": 523,
  "address": "Cairo",
  "Address": "Giza",
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 6:
**MongoDB Filter Validity**
Which of the following is not a valid MongoDB filter?

a) `{ "dno": {$gte: 14, $lte: 16} }`  
b) `{ $and: [{"dno": 14}, {salary: 7.5}] }`  
c) `{ $or: [{"dno": {$gte: 14, $lte: 16}}, {salary: 7.5}] }`  
d) None of the above

---

### Question 7:
**MongoDB Filter Representation**
```json
{Sand: [{"dno": {Snot: {Seq: 8}}}, {"month": {Shin: [5, 9, 10]}}, {"gender": "F"}]}
```
Which of the following statements is represented by the above MongoDB filter?

a) dno != 8 and month is not in {5, 9, 10} and gender = F  
b) dno != 8 and month is in {5, 9, 10} and gender = F  
c) dno = 8 and month is not in {5, 9, 10} and gender = F  
d) None of the above

---

### Question 8:
**JSON Document Validation**
```json
"ssn": "112341102"
"bdate": DATE("1968-01-12")
"address": "2342 May", "Atlanta", "GA"
"salary": 46500.00,
"superssn": "11541100"
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 9:
**MongoDB Filter Representation**
```json
{ "day": {Sgte: 14, $lte: 16} }
```
Which of the following statements is represented by the above MongoDB filter?

a) day > 14 and day <= 16  
b) day >= 14 and day < 16  
c) day >= 14 and day <= 16  
d) None of the above

---

### Question 10:
**MongoDB Filter Validity**
Which one of the following is a valid MongoDB filter?

a) `{ $or: [{"dno": {$gte: 14, $lte: 16}}, {salary: 25000}] }`  
b) `{ $or: [{"dno": {$gte: 14, 16}}, {salary, $lte: 25000}] }`  
c) `{ $or: [{"dno": {14, $lte: 16}}, {$gte: 25000}] }`  
d) None of the above

---

### Question 11:
**JSON Document Validation**
```json
{
  "fname": "Justin",
  "lname": "Mark",
  "ssn": "11341102",
  "salary": 4070.00,
  "superssn": "1117600",
  "phone": 12345,
  "phone": 7998710
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 12:
**MongoDB Filter Representation**
```json
{$or: [{"day": {$gt: 12, $ltc: 15}}, {"hour": 56.5}]}
```
Which of the following statements is represented by the above MongoDB filter?

a) day <= 15 and day >= 12 or hour = 56.5  
b) (day <= 15 and day > 12) or hour = 56.5  
c) day <= 15 or day > 12 or hour = 56.5  
d) None of the above

---

### Question 13:
**JSON Document Validation**
```json
{
  "fname": "Justin",
  "Iname": "Mark",
  "ssn": "111111102",
  "salary": 40000.00,
  "superssn": "111111100",
  "phone": 12345,
  "is a manager": TRUE
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 14:
**JSON Document Validation**
```json
{
  "fname": "Justin",
  "Iname": "Mark",
  "ssn": "11341102",
  "salary": 4070.00,
  "superssn": "1117600",
  "phone": 12345,
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 15:
**JSON Document Validation**
```json
{
  "fname": "Mohamed",
  "lname": "Mahmod",
  "ssn": "11165102",
  "salary": 4600.00,
  "superssn": "761100",
  "dno": NULL,
  "phone": 12345,
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 16:
**JSON Document Validation**
```json
{
  "ssn": "112341102",
  "bdate": DATE("1968-01-12"),
  "address": "2342 May", "Atlanta", "GA",
  "salary": 46500.00,
  "superssn": "11541100",
}
```
Does the following code represent a JSON document in a standard format?

a) Correct  
b) Not correct

---

### Question 17:
**MongoDB Filter Representation**
```json
{ "day": {Sgtc: 14, Slte: 16} }
```
Which of the following statements is represented by the above MongoDB filter?

a) day > 14 and day <= 16  
b) day >= 14 and day < 16  
c) day >= 14 and day <= 16  
d) None of the above

---

### Question 18:
**MongoDB Filter Validity**
Which one of the following is a valid MongoDB filter?

a) `{ $or: [{"dno": {$gte: 14, $lte: 16}}, {salary: 25000}] }`  
b) `{ $or: [{"dno": {$gte: 14, 16}}, {salary, $lte: 25000}] }`  
c) `{ $or: [{"dno": {14, $lte: 16}}, {$gte: 25000}] }`  
d) None of the above

---

### Question 19:
**Runtime Error**
```
Runtime error 217 at 0040A300
```
What does the above runtime error indicate?

a) Memory access violation  
b) Division by zero  
c) Invalid operation  
d) None of the above

---

