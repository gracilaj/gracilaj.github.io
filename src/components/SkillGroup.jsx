import { skillIconSrc } from '../utils/skillIcons'

export function SkillGroup({ label, items }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group-title">{label}</h3>
      <ul className="skill-list">
        {items.map((item) => {
          const iconSrc = item.icon ? skillIconSrc(item.icon) : null
          return (
            <li key={item.name} className="skill-chip">
              {iconSrc && (
                <img
                  className="skill-icon"
                  src={iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <span className="skill-name">{item.name}</span>
              {item.years != null && (
                <span className="skill-years">
                  {item.years === 1 ? '1 yr' : `${item.years} yrs`}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
