import { img_base_url, mine } from "./Config";
import {Text, Subheading} from './utils/Comps'

const people = [{
  name: '0',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: '1',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: '2',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: '3',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: '4',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: '5',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}];

export default function Teams() {
  return (
    <div className=" py-24 sm:py-32 dark:bg-gray-800 dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <Subheading text={`Meet our leadership`}/>
          
            <Text text={`Welcome to infoUnix, where we believe in the power of exceptional leadership to drive innovation, foster collaboration, and guide our organization towards success. In this section, we invite you to meet the talented individuals who lead and contribute to our shared vision.`}/>
            
         
          <Text text={`Have questions or want to learn more about our team? Feel free to reach out to us directly. We're here to answer your inquiries and help you get to know our team better. Thank you for taking the time to explore our leadership section.`}/>
        </div>
        <ul  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 bg-white px-2 py-1 rounded-full">
                <img className="h-16 w-16 rounded-full" src={`${img_base_url}${person.imageUrl}`} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};