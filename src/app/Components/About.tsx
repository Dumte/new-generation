import {
  FaChalkboardTeacher,
  FaUserTie,
  FaAward,
  FaHistory,
  FaSchool,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { staffMembers } from "../data";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* School Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Our School
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Welcome to Evangel Academy, a premier educational institution
            dedicated to academic excellence, character development, and
            holistic growth. Since our founding, we have been committed to
            nurturing young minds and preparing them for the challenges of
            tomorrow.
          </p>
        </div>

        {/* School History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaHistory className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our History
              </h3>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                Founded in 2004, Evangel Academy began as a small community
<<<<<<< HEAD
                school with just 10 pupils And 2 teachers. Over the decades, we
                have grown into one of the region&apos;s most respected Educational
=======
                school with just 10 pupils and 2 teachers. Over the decades, we
                have grown into one of the region's most respected educational
>>>>>>> 9bd4886a7ede4b4d8c84a68d1e381a3b479469c6
                institutions.
              </p>
              <p>
                Our campus has expanded to include state-of-the-art facilities
                while maintaining our commitment to personalized education. The
                school has consistently produced outstanding academic results
                and well-rounded graduates who excel in various fields.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {/* Replace with your school's historical image */}
            <div className="h-80 bg-gray-300 flex items-center justify-center">
              <FaSchool className="text-gray-400 text-6xl" />
            </div>
          </div>
        </div>

        {/* Principal's Welcome */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
                {/* Replace with principal's photo */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  <FaUserTie className="text-6xl" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUserTie className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Principal&apos;s Welcome
                </h3>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
<<<<<<< HEAD
                &quot;It gives me great pleasure to welcome you to Evangel
                Academy. Our school is built on the Foundation of academic
                rigor, moral values, and a commitment to developing each
                student&apos;s unique potential.&quot;
=======
                "It gives me great pleasure to welcome you to Evangel Academy.
                Our school is built on the foundation of academic rigor, moral
                values, and a commitment to developing each student's unique
                potential."
>>>>>>> 9bd4886a7ede4b4d8c84a68d1e381a3b479469c6
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-gray-800">Mr. Barianea Tep</p>
                <p className="text-gray-600">Principal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Staff */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaChalkboardTeacher className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Management Team
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* Replace with staff photo */}
                  <GiTeacher className="text-gray-400 text-6xl" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* School Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaAward className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600">
              To provide a transformative educational experience that empowers
              students with knowledge, skills, and values to become responsible
              global citizens and leaders of tomorrow.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaAward className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600">
              To be recognized as a center of academic excellence that nurtures
              innovation, character, and lifelong learning, preparing students
              to meet the challenges of a rapidly changing world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
