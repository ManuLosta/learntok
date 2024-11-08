import CourseHeaderInfo from '@/components/course/header/CourseHeaderInfo';
import {
  ModuleList,
  ModuleListProps,
} from '@/components/common/module-list/ModuleList';
import { Button } from '@/components/common/button/Button';
import { PlayIcon } from '@/components/common/icon/PlayIcon';

const modules: ModuleListProps[] = [
  {
    variant: 'completed',
    title: 'Introduction to Algebra',
    duration: '3 min',
    description:
      'A brief overview of algebraic concepts, including variables, expressions, and equations.',
    videos: 1,
    questions: 2,
    documents: 0,
  },
  {
    variant: 'completed',
    title: 'Basic Algebraic Operations',
    duration: '5 min',
    description:
      'Learn the basics of addition, subtraction, multiplication, and division with variables.',
    videos: 1,
    questions: 3,
    documents: 0,
  },
  {
    variant: 'progress',
    title: 'Operations with Real Numbers',
    duration: '10 min',
    description:
      'Explore operations with real numbers, covering integers, fractions, and decimals.',
    videos: 1,
    questions: 4,
    documents: 0,
  },
  {
    variant: 'locked',
    title: 'Solving Simple Equations',
    duration: '8 min',
    description:
      'Learn techniques to solve basic equations and understand equality properties.',
    videos: 1,
    questions: 5,
    documents: 1,
  },
  {
    variant: 'locked',
    title: 'Understanding Inequalities',
    duration: '12 min',
    description:
      'Delve into inequalities, including how to solve and graph them on a number line.',
    videos: 2,
    questions: 4,
    documents: 1,
  },
  {
    variant: 'locked',
    title: 'Introduction to Exponents and Powers',
    duration: '15 min',
    description:
      'Get familiar with exponents, powers, and their properties in algebraic expressions.',
    videos: 2,
    questions: 5,
    documents: 2,
  },
  {
    variant: 'locked',
    title: 'Introduction to Polynomials',
    duration: '18 min',
    description:
      'Understand polynomials, their structure, and basic operations like addition and subtraction.',
    videos: 2,
    questions: 6,
    documents: 1,
  },
  {
    variant: 'locked',
    title: 'Factoring Techniques',
    duration: '20 min',
    description:
      'Learn factoring techniques to simplify expressions, focusing on common factors and trinomials.',
    videos: 2,
    questions: 6,
    documents: 2,
  },
  {
    variant: 'locked',
    title: 'Quadratic Equations',
    duration: '25 min',
    description:
      'Introduction to quadratic equations, their properties, and various methods to solve them.',
    videos: 3,
    questions: 7,
    documents: 2,
  },
  {
    variant: 'locked',
    title: 'Word Problems in Algebra',
    duration: '22 min',
    description:
      'Practice solving real-life word problems using algebraic techniques and equations.',
    videos: 3,
    questions: 8,
    documents: 3,
  },
];

export default function Course() {
  return (
    <>
      <CourseHeaderInfo
        title={'Algebra I'}
        imageUrl={'/assets/algebracourse.png'}
      >
        <div className="flex flex-col gap-4 p-4">
          <p className="typography-body">
            In this course, you will learn the basics of algebra, including
            operations with real numbers, solving linear equations, and graphing
            functions. This course is designed to provide a strong foundation
            for more advanced mathematical studies.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="typography-body-bold">Course category</p>
              <p className="typography-body text-slate-600">Math</p>
            </div>
            <div>
              <p className="typography-body-bold">Duration</p>
              <p className="typography-body text-slate-600">3 hs</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="typography-header-4">Modules</h2>
            <p className="typography-body-small font-bold text-slate-600">
              1 of 9 modules completed
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {modules.map((module, index) => (
              <ModuleList key={index} {...module} />
            ))}
          </div>
        </div>
      </CourseHeaderInfo>
      <div className="fixed bottom-0 bg-gray-50 p-4 flex items-center justify-center w-full rounded-t-2xl">
        <Button className="w-full" endContent={<PlayIcon size={16} />}>Resume</Button>
      </div>
    </>
  );
}
