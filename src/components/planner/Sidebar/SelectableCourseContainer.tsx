import { DraggableCourse } from '../types';
import SelectableCourse from './SelectableCourse';

export default function SelectableCourseContainer({
  results,
  selectedCourses,
  updateSelectedCourses,
}: {
  results: DraggableCourse[];
  selectedCourses: { [key: string]: DraggableCourse };
  updateSelectedCourses: (course: DraggableCourse, add: boolean) => void;
}) {
  return (
    <div className="bg-white flex flex-col gap-y-4 text-[#757575]">
      {results.map((elm, idx) => {
        let selected = false;
        if (selectedCourses[elm.code] !== undefined) {
          selected = true;
        }
        return (
          <SelectableCourse
            key={idx}
            course={elm}
            selected={selected}
            selectCourse={updateSelectedCourses}
          />
        );
      })}
    </div>
  );
}
