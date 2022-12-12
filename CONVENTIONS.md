# React-компоненты
Файлы React-компонентов и кастомных хуков называются в `kebab-case`:
```
component-name.tsx
use-feature.ts
```
Названия компонентов в `PascalCase`, а пропсы в `camelCase`:
```typescript jsx
const ComponentName = ({ propName }) => {}
```

# JavaScript
Переменные именуются в `camelCase`, а константы в `snake_case` в верхнем регистре:
```javascript
let someVariable = 'variable value'
const SOME_CONSTANT = 'constant value'
```

# TypeScript
Типы в `PascalCase` с начальной `T`:
```typescript
type TSomeType = {}
```
Интерфейсы также в `PascalCase`, но с начальной `I`:
```typescript
interface ISomeInterface extends IAnotherInterface {}
```
Файлы, содержащие только определения типов, называются в `kebab-case` с суффиксом `*.d.ts`, например:
```
types-definition.d.ts
```
