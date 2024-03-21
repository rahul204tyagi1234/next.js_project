export default function result() {
  return (
    <div>
      <div id="result"></div>
      <div className="card container">
        <div className=" bg-white text-center">
          <h2>Result</h2>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0"></blockquote>
          <p>
            ParagraphParagraphs are the group of sentences combined together,
            about a certain topic. It is a very important form of writing as we
            write almost everything in paragraphs, be it an answer, essay,
            story, emails, etc. We can say that a well-structured paragraph is
            the essence of good writing. The purposes of the paragraph are to
            give information, to explain something, to tell a story, and to
            convince someone that our idea is right. Paragraphs are blocks of
            textual content that segment out a larger piece of writing—stories,
            novels, articles, creative writing, or professional writing
            portions—making it less complicated to read and understand.
            Excellent paragraphs are an available writing skill for plenty of
            types of literature, and proper writers can substantially beautify
            the clarity of their news, essays, or fiction writing whilst
            constructing nicely.
          </p>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary btn-lg m-2"
              onclick="print()"
            >
              Print-Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
