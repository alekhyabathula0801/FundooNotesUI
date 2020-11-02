import HttpServices from "./HttpServices";
import * as noteApiConstants from "../apiConstants/noteApiConstants";
let baseUrl = process.env.REACT_APP_API_URL;
let token = "";
if (JSON.parse(localStorage.getItem("fundoo-notes")) !== null) {
  token = JSON.parse(localStorage.getItem("fundoo-notes")).data.id;
}
class NoteService {
  addNote(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.addNotes,
      token
    );
  }

  updateNote(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.updateNotes,
      token
    );
  }

  updateNoteColor(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.changesColorNotes,
      token
    );
  }

  tooglePinNote(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.pinUnpinNotes,
      token
    );
  }

  toogleArchiveNote(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.archiveNotes,
      token
    );
  }

  restoreNote(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.trashNotes,
      token
    );
  }

  addOrUpdateReminder(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.addOrUpdateReminder,
      token
    );
  }

  addLabel(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.noteLabels,
      token
    );
  }

  removeReminder(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.removeReminder,
      token
    );
  }

  deleteNoteForever(data) {
    return HttpServices.postApiRequest(
      data,
      baseUrl + noteApiConstants.notesApi.deleteForeverNotes,
      token
    );
  }

  getAllNotes() {
    return HttpServices.getApiRequest(
      baseUrl + noteApiConstants.notesApi.getNotesList,
      token
    );
  }

  getAllArchiveNotes() {
    return HttpServices.getApiRequest(
      baseUrl + noteApiConstants.notesApi.getArchiveNotesList,
      token
    );
  }

  getAllDeletedNotes() {
    return HttpServices.getApiRequest(
      baseUrl + noteApiConstants.notesApi.getTrashNotesList,
      token
    );
  }
}

export default new NoteService();
