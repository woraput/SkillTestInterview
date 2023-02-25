import React, { useState } from "react";

type Props = {};

type DataTest4And5 = {
  name: string;
  age: number;
};

type DataTest6 = {
  name: string;
  age: number;
  salary: number;
  children: number;
};

const INPUT_EXAM_4_5: DataTest4And5[] = [
  {
    name: "John",
    age: 60,
  },
  {
    name: "Doe",
    age: 20,
  },
  {
    name: "Will",
    age: 40,
  },
  {
    name: "Smith",
    age: 69,
  },
  {
    name: "Mayer",
    age: 56,
  },
];

const INPUT_EXAM_6: DataTest6[] = [
  {
    name: "John",
    age: 60,
    salary: 50000,
    children: 3,
  },
  {
    name: "Doe",
    age: 20,
    salary: 30000,
    children: 2,
  },
  {
    name: "Will",
    age: 40,
    salary: 20000,
    children: 1,
  },
  {
    name: "Smith",
    age: 69,
    salary: 25000,
    children: 0,
  },
  {
    name: "Mayer",
    age: 56,
    salary: 60000,
    children: 1,
  },
];

const Playground = (props: Props) => {
  const [dataTest2, setDataTest2] = useState<number[]>(
    [...Array(10)].map((e) => Math.round(Math.random() * 100))
  );

  const [dataTest3, setDataTest3] = useState<number[]>(
    [...Array(10)].map((e) => Math.round(Math.random() * 100))
  );

  const [sortType, setSortType] = useState<number>(0);
  const [sortTypeObj, setSortTypeObj] = useState<number>(0);
  const [resultTest6, setResultTest6] = useState<string>("");

  const refreshDataTest2 = () => {
    setDataTest2([...Array(10)].map((e) => Math.round(Math.random() * 100)));
  };

  const refreshDataTest3ASC = () => {
    setDataTest3([...Array(10)].map((e) => Math.round(Math.random() * 100)));
    setSortType(0);
  };

  const refreshDataTest3DESC = () => {
    setDataTest3([...Array(10)].map((e) => Math.round(Math.random() * 100)));
    setSortType(1);
  };

  const findHighestNumber = (rawData: number[]): number => {
    let highestNumber: number = rawData[0];

    for (const it of rawData) {
      highestNumber = highestNumber < it ? it : highestNumber;
    }

    return highestNumber;
  };

  const findLowestNumber = (rawData: number[]): number => {
    let highestNumber: number = rawData[0];

    for (const it of rawData) {
      highestNumber = highestNumber > it ? it : highestNumber;
    }

    return highestNumber;
  };

  const sortArrayNumber = (orderBy: number, rawData: number[]): number[] => {
    let oldArr: number[] = [...rawData];
    let newArray: number[] = [];

    while (oldArr.length > 0) {
      let interestNumber =
        orderBy === 0 ? findLowestNumber(oldArr) : findHighestNumber(oldArr);
      newArray.push(interestNumber);
      let index = oldArr.indexOf(interestNumber);
      oldArr.splice(index, 1);
    }

    return newArray;
  };

  const findHighestAge = (rawData: DataTest4And5[]): DataTest4And5 => {
    let objHighest: DataTest4And5 = rawData[0];

    rawData.forEach((it) => {
      if (objHighest.age < it.age) {
        objHighest = it;
      }
    });

    return objHighest;
  };

  const findLowestAge = (rawData: DataTest4And5[]): DataTest4And5 => {
    let objHighest: DataTest4And5 = rawData[0];

    rawData.forEach((it) => {
      if (objHighest.age > it.age) {
        objHighest = it;
      }
    });

    return objHighest;
  };

  const sortArrayObjByAge = (
    orderBy: number,
    rawData: DataTest4And5[]
  ): DataTest4And5[] => {
    let oldArr: DataTest4And5[] = [...rawData];

    let newArray: DataTest4And5[] = [];

    while (oldArr.length > 0) {
      let interestObj =
        orderBy === 0 ? findLowestAge(oldArr) : findHighestAge(oldArr);
      newArray.push(interestObj);
      let index = oldArr.indexOf(interestObj);
      oldArr.splice(index, 1);
    }

    return newArray;
  };

  const findHighestSpecificByUser = (
    rawData: DataTest6[],
    func: Function
  ): void => {
    let oldArr: DataTest6[] = [...rawData];
    let objHighest: DataTest6 = rawData[0];

    oldArr.forEach((it) => {
      if (func(objHighest) < func(it)) {
        objHighest = it;
      }
    });

    setResultTest6(JSON.stringify(objHighest));
  };

  return (
    <div className="container-fluid container-custom flex-col ">
      <h1>Exam 2-6</h1>

      <h2>test2</h2>
      <div>finding the highest number of [{dataTest2?.join(",")}]</div>
      <div>Highest is : {findHighestNumber(dataTest2)}</div>
      <button
        className=" w-[150px] btn-primary"
        onClick={() => refreshDataTest2()}
      >
        {" "}
        refresh
      </button>
      <hr />
      <h2>test3</h2>
      <div>finding the highest number of [{dataTest3?.join(",")}]</div>
      <div>Highest is : [{sortArrayNumber(sortType, dataTest3).join(",")}]</div>
      <div className=" flex gap-2">
        <button
          className=" w-[150px] btn-primary"
          onClick={() => refreshDataTest3ASC()}
        >
          {" "}
          ASC
        </button>
        <button
          className=" w-[150px] btn-primary"
          onClick={() => refreshDataTest3DESC()}
        >
          {" "}
          DESC
        </button>
      </div>
      <hr />
      <h2>test4</h2>
      <small>Test set is : {JSON.stringify(INPUT_EXAM_4_5)}</small>
      <div>
        Highest object Age is : {JSON.stringify(findHighestAge(INPUT_EXAM_4_5))}
      </div>

      <hr />
      <h2>test5</h2>
      <small>Test set is : {JSON.stringify(INPUT_EXAM_4_5)}</small>
      <div>
        Sort object Age is :{" "}
        {JSON.stringify(sortArrayObjByAge(sortTypeObj, INPUT_EXAM_4_5))}
      </div>
      <div className=" flex gap-2">
        <button
          className=" w-[150px] btn-primary"
          onClick={() => setSortTypeObj(0)}
        >
          {" "}
          ASC
        </button>
        <button
          className=" w-[150px] btn-primary"
          onClick={() => setSortTypeObj(1)}
        >
          {" "}
          DESC
        </button>
      </div>

      <hr />
      <h2>test6</h2>
      <small>Test set is : {JSON.stringify(INPUT_EXAM_6)}</small>
      <div>Sort by Condition User : {resultTest6}</div>
      <div className=" flex gap-2">
        <button
          className=" w-[150px] btn-primary"
          onClick={() =>
            findHighestSpecificByUser(
              INPUT_EXAM_6,
              (person: DataTest6) => person.age
            )
          }
        >
          {" "}
          Find by Age
        </button>
        <button
          className=" w-[150px] btn-primary"
          onClick={() =>
            findHighestSpecificByUser(
              INPUT_EXAM_6,
              (person: DataTest6) => person.salary
            )
          }
        >
          {" "}
          Find by salary
        </button>
        <button
          className=" w-[150px] btn-primary"
          onClick={() =>
            findHighestSpecificByUser(
              INPUT_EXAM_6,
              (person: DataTest6) => person.children
            )
          }
        >
          {" "}
          Find by children
        </button>
        <button
          className=" w-[150px] btn-primary"
          onClick={() =>
            findHighestSpecificByUser(
              INPUT_EXAM_6,
              (person: DataTest6) => person.name
            )
          }
        >
          {" "}
          Find by Name
        </button>
      </div>
    </div>
  );
};

export default Playground;
