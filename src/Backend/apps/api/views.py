from django.http import JsonResponse, HttpRequest, HttpResponse
from ..model.qna import get_answer

# Create your views here.
def give_answer_to_question(req: HttpRequest):
   if req.method == 'GET':
      q_str = req.GET.get('question')
      # validation
      if len(q_str) == 0:
         return HttpResponse('Question is empty.', status=400)
      # predict the answer
      ans_str = get_answer(q_str)
      return JsonResponse({'answer': ans_str})