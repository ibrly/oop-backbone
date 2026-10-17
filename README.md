# oop-backbone

Object-oriented programming concepts in TypeScript, with a minimal Express + TypeScript server as the entry point.

## Concepts

| Concept | File | What it shows |
|---------|------|---------------|
| Classes | [app/class/First.ts](app/class/First.ts) | constructors, `protected` members, methods |
| Encapsulation | [app/encapsulation/Encapsulation.ts](app/encapsulation/Encapsulation.ts) | a private field exposed through a getter (accessor) and setter (mutator) |
| Abstraction | [app/abstraction/Abstraction.ts](app/abstraction/Abstraction.ts) | `abstract` classes whose abstract members must be implemented by subclasses (a circle in `Override.ts`) |
| Interfaces | [app/interface/Interface.ts](app/interface/Interface.ts), [Counter.ts](app/interface/Counter.ts) | declaring a contract and implementing it |
| Polymorphism (override) | [app/polymorphism/override/Override.ts](app/polymorphism/override/Override.ts) | overriding members of a base class without changing their signature |
| Polymorphism (overload) | [app/polymorphism/overload/Overload.ts](app/polymorphism/overload/Overload.ts) | overload signatures sharing one implementation that narrows its arguments |
| Inheritance | [app/relationships/inheritance](app/relationships/inheritance) | `Dog` extends `Animal`, calls `super()` and overrides `speak()` |

## Running

```bash
mkdir -p env && echo "PORT=1000" > env/app.env
docker compose up --build
```

Or locally:

```bash
cd app
npm install
PORT=1000 npm run dev
```

The server responds on `http://localhost:1000`, and `GET /concepts` runs one example per concept and returns the results as JSON.
