import React from 'react';
import { Category } from '@/components/course/category/Category';
import { CourseItem } from '@/components/course/item/CourseItem';
import { NavBar } from '@/components/common/navbar/NavBar';
import { HomeIcon } from '@/components/common/icon/HomeIcon';
import { SearchIcon } from '@/components/common/icon/SearchIcon';
import { ProfileIcon } from '@/components/common/icon/ProfileIcon';
import { LiteratureIcon } from '@/components/common/category-icon/LiteratureIcon';
import { MathIcon } from '@/components/common/category-icon/MathIcon';
import { PhysicsIcon } from '@/components/common/category-icon/PhysicsIcon';
import { GeographyIcon } from '@/components/common/category-icon/GeographyIcon';

export default function HomePage() {
  return (
    <div className="pl-6 pt-6 pb-28 flex flex-col items-start justify-start scrollbar-hide gap-4 overflow-hidden">

      {/* Continue Section */}
      <section className="w-full">
        <h2 className="typography-header-4 mb-4">Continue</h2>
        <div className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide pr-4">
          <CourseItem
            className="min-w-[221px]"
            courseName="Art and Culture"
            labelName="Literature"
            labelColor="#B2C9FF"
            path="/assets/art&culture.png"
            completedModules={41}
            totalModules={57}
            variant="on_progress"
          />
          <CourseItem
            className="min-w-[221px]"
            courseName="Algebra 1"
            labelName="Math"
            labelColor="#D4DBE8"
            path='/assets/algebracourse.png'
            completedModules={41}
            totalModules={57}
            variant="on_progress"
          />
          <CourseItem
            className="min-w-[221px]"
            courseName="Geometry 1"
            labelName="Math"
            labelColor="#D4DBE8"
            path="/assets/geometryclass.png"
            completedModules={41}
            totalModules={57}
            variant="on_progress"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full">
        <h2 className="typography-header-4 mb-4">Categories</h2>
        <div className="overflow-hidden">
          <div className="flex flex-row gap-6 overflow-x-auto pb-4 scrollbar-hide pr-4">
            <Category label="Literature" color="#B2C9FF" icon={<LiteratureIcon size={60} background="#B2C9FF" foreground="#01226F" />} />
            <Category label="Math" color="#D4DBE8" icon={<MathIcon size={60} background="#D4DBE8" foreground="#1B212E" />} />
            <Category label="Geography" color="#A7F3D0" icon={<GeographyIcon size={60} background="#A7F3D0" foreground="#1D572C" />} />
            <Category label="Physics" color="#FED7AA" icon={<PhysicsIcon size={60} background="#FED7AA" foreground="#331010" />} />
            <Category label="Literature" color="#B2C9FF" icon={<LiteratureIcon size={60} background="#B2C9FF" foreground="#01226F" />} />
            <Category label="Math" color="#D4DBE8" icon={<MathIcon size={60} background="#D4DBE8" foreground="#1B212E" />} />
            <Category label="Geography" color="#A7F3D0" icon={<GeographyIcon size={60} background="#A7F3D0" foreground="#1D572C" />} />
            <Category label="Physics" color="#FED7AA" icon={<PhysicsIcon size={60} background="#FED7AA" foreground="#331010" />} />
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="w-full">
        <h2 className="typography-header-4 mb-4">For you</h2>
        <div className="overflow-hidden">
          <div className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide pr-4">
            <CourseItem
              className="min-w-[221px]"
              courseName="World Literature Classics"
              labelName="Literature"
              labelColor="#B2C9FF"
              path="/assets/worldliterature.png"
              completedModules={0}
              totalModules={1}
            />
            <CourseItem
              className="min-w-[221px]"
              courseName="Mathematical Logic"
              labelName="Math"
              labelColor="#D4DBE8"
              path="/assets/mathematicallogic.png"
              completedModules={0}
              totalModules={1}
            />
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="w-full">
        <h2 className="typography-header-4 mb-4">Popular</h2>
        <div className="overflow-hidden">
          <div className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide pr-4">
            <CourseItem
              className="min-w-[221px]"
              courseName="Introduction to Geometry"
              labelName="Math"
              labelColor="#D4DBE8"
              path="/assets/geometryclass.png"
              completedModules={12}
              totalModules={20}
            />
            <CourseItem
              className="min-w-[221px]"
              courseName="World Geography"
              labelName="Geography"
              labelColor="#A7F3D0"
              path="/assets/worldgeo.png"
              completedModules={12}
              totalModules={20}
            />
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="w-full">
        <h2 className="typography-header-4 mb-4">New releases</h2>
        <div className="overflow-hidden">
          <div className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide pr-4">
            <CourseItem
              className="min-w-[221px]"
              courseName="Electricity and Magnetism"
              labelName="Physics"
              labelColor="#FED7AA"
              path="/assets/e&m.png"
              completedModules={12}
              totalModules={20}
            />
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
        <NavBar
          className="fixed bottom-0 w-screen left-0"
          items={[
            { label: 'Home', icon: <HomeIcon size={24} /> },
            { label: 'Search', icon: <SearchIcon size={24} /> },
            { label: 'Profile', icon: <ProfileIcon size={24} /> }
          ]}
          activeIndex={0}
        />
    </div>
  );
}