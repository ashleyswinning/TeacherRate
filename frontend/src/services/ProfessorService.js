import professors from './professors.json';

export default class ProfessorService {
    static getProfessors() {
        return professors ? professors : [];
    }
}