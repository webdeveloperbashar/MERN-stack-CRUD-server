const Salary = require("./Schema");

exports.getAllSalary = (req, res) => {
  Salary.find()
    .then((salary) => {
      res.json(salary);
    })
    .catch((e) => {
      res.json(e);
    });
};

exports.createSalary = (req, res) => {
  let { name, salary, profession, days, id } = req.body;
  if (!id) {
    let salaryInfo = new Salary({
      name,
      salary,
      profession,
      days,
    });
    salaryInfo
      .save()
      .then(() => {
        Salary.find()
          .then((salary) => {
            res.json(salary);
          })
          .catch((e) => {
            res.json(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  } else if (id) {
    Salary.findOneAndUpdate(
      { _id: id },
      { $set: { name, salary, profession, days } },
      { new: true, useFindAndModify: false }
    )
      .then(() => {
          getAllSalary();
      })
      .catch((e) => {
        res.json(e);
      });
  }
};
exports.deleteSalary = (req, res) => {
  const { id } = req.params;
  Salary.findOneAndDelete({ _id: id })
    .then(() => {
      getAllSalary();
    })
    .catch((e) => {
      res.json(e);
    });
};