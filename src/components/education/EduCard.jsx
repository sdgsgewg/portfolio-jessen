export default function EduCard({ edu }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <h3 className="font-bold text-xl text-gray-800">{edu.institutionName}</h3>
      <p className="text-secondary">{edu.degreeObtained}</p>
      <p className="text-sm text-secondary">{edu.yearsAttended}</p>
      <p className="mt-4 text-gray-700">{edu.description}</p>
    </div>
  );
}
