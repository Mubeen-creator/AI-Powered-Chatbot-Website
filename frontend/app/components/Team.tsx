import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Mubeen",
      role: "Full Stack AI Developer",
      image: "https://readymadeui.com/team-1.webp",
    },
    {
      id: 2,
      name: "Abubakar",
      role: "MERN Stack Developer",
      image: "https://readymadeui.com/team-2.webp",
    },
    {
      id: 3,
      name: "Arsalan Ayaz",
      role: "AI Developer",
      image: "https://readymadeui.com/team-1.webp",
    },
    {
        id: 2,
        name: "Ahsan",
        role: "AI Developer",
        image: "https://readymadeui.com/team-2.webp",
      },
  ];

  return (
    <div className="font-sans my-10">
      <div className="lg:max-w-5xl max-w-3xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gray-800 text-3xl font-extrabold">Meet our team</h2>
          <p className="text-gray-800 text-sm mt-4 leading-relaxed">
            Meet our team of professionals to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="border rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">{member.name}</h4>
                <p className="text-gray-800 text-xs mt-1">{member.role}</p>

                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
