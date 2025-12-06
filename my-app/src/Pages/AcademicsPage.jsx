import { useState } from 'react'
import '../index.css'
import '../App.css'
import AcademicHeader from '../Components/Academic/AcademicHeader'
import AcademicCard from '../Components/Academic/AcademicCard'
import AcademicButton from '../Components/Academic/AcademicButton'
import AcademicInput from '../Components/Academic/AcademicInput'


export default function AcademicsPage() {
  const [courses, setCourses] = useState([])
  const [teachers, setTeachers] = useState([])
  const [courseForm, setCourseForm] = useState({ description: '', units: 3 })
  const [teacherForm, setTeacherForm] = useState({ firstname: '', lastname: '', department: '', courseIds: [] })
  const [status, setStatus] = useState(null)

  const submitCourse = (e) => {
    e.preventDefault()
    setStatus(null)
    const desc = courseForm.description.trim()
    const units = Number(courseForm.units)
    if (!desc) { setStatus('Enter course description'); return }
    if (!Number.isFinite(units) || units < 1) { setStatus('Units must be at least 1'); return }
    const saved = { id: Date.now() + Math.floor(Math.random() * 1000), description: desc, units }
    setCourses(prev => [...prev, saved])
    setCourseForm({ description: '', units: 3 })
    setStatus('Course created')
  }

  const submitTeacher = (e) => {
    e.preventDefault()
    setStatus(null)
    const { firstname, lastname, department, courseIds } = teacherForm
    const fn = firstname.trim()
    const ln = lastname.trim()
    const dept = department.trim()
    if (!fn || !ln) { setStatus('Enter teacher name'); return }
    if (!dept) { setStatus('Enter department'); return }
    const saved = { id: Date.now() + Math.floor(Math.random() * 1000), firstname: fn, lastname: ln, department: dept, courseIds: courseIds.map(Number) }
    setTeachers(prev => [...prev, saved])
    setTeacherForm({ firstname: '', lastname: '', department: '', courseIds: [] })
    setStatus('Teacher created')
  }

  return (
    <div className="container">
      <AcademicHeader brand="React" title="ACADEMICS MANAGER" subtitle="by: Juen, Gee Caliph" />

      <div className="grid">
        <AcademicCard title="Course">
          <form onSubmit={submitCourse}>
            <AcademicInput
              label="Description"
              placeholder="e.g., AppDev 101"
              value={courseForm.description}
              onChange={e => setCourseForm({ ...courseForm, description: e.target.value })}
            />
            <AcademicInput
              label="Units"
              type="number"
              min={1}
              value={courseForm.units}
              onChange={e => setCourseForm({ ...courseForm, units: Number(e.target.value) })}
            />
            <AcademicButton type="submit">Create Course</AcademicButton>
          </form>
        </AcademicCard>

        <AcademicCard title="Teacher">
          <form onSubmit={submitTeacher}>
            <AcademicInput
              label="Firstname"
              value={teacherForm.firstname}
              onChange={e => setTeacherForm({ ...teacherForm, firstname: e.target.value })}
            />
            <AcademicInput
              label="Lastname"
              value={teacherForm.lastname}
              onChange={e => setTeacherForm({ ...teacherForm, lastname: e.target.value })}
            />
            <AcademicInput
              label="Department"
              value={teacherForm.department}
              onChange={e => setTeacherForm({ ...teacherForm, department: e.target.value })}
            />
            <div className="field">
              <label className="label">Courses handled</label>
              <select className="select" multiple value={teacherForm.courseIds}
                      onChange={e => {
                        const selected = Array.from(e.target.selectedOptions).map(o => Number(o.value))
                        setTeacherForm({ ...teacherForm, courseIds: selected })
                      }}>
                {courses.map(c => (
                  <option key={c.id} value={c.id}>{c.description}</option>
                ))}
              </select>
            </div>
            <AcademicButton type="submit">Create Teacher</AcademicButton>
          </form>
        </AcademicCard>
        <AcademicCard title="Courses">
          <ul className="list">
            {courses.map(c => (
              <li key={c.id}>{c.description} ({c.units} units)</li>
            ))}
          </ul>
        </AcademicCard>

        <AcademicCard title="Teachers">
          <ul className="list">
            {teachers.map(t => (
              <li key={t.id}>{t.firstname} {t.lastname} — {t.department}</li>
            ))}
          </ul>
        </AcademicCard>
      </div>

      {status && <div className="subtle" style={{ marginTop: 8 }}>{status}</div>}
    </div>
  )
}
