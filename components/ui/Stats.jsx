"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of Experience",
  },
  {
    num: 12,
    text: "Lorem ipsum",
  },
  {
    num: 12,
    text: "Blah blah",
  },
  {
    num: 500,
    text: "Code commits",
  },
]

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((stat, index) => (
            <div
              key={index}>
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats