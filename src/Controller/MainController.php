<?php
namespace App\Controller;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class MainController extends AbstractController
{
    private EntityManagerInterface $em;
    /**
     * MainController constructor.
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @Route("/", "main_page")
     */
    public function main() {
        return $this->render('mainPage.html.twig');
    }

    /**
     * @Route("/contact-form", "contact-form", methods={"POST"})
     */
    public function form( Request $request ): Response {
        $data =json_decode($request->getContent(),true);
        $email = $data["mail"];
        $phone = $data["phone"];
        $name = $data["name"];
        $message = $data["message"];

        if ( !$message || !$phone || !$name || !$email)
            return new Response("$message, $phone, $name, $email", Response::HTTP_BAD_REQUEST);

        $newContact = new Contact();
        $newContact->setEmail($email)
            ->setName($name)
            ->setNumber($phone)
            ->setMessage($message);
        $this->em->persist($newContact);
        $this->em->flush();
        /*$myfile = fopen($email, "w");
        $txt =
            "email: $email\n
            phone: $phone\n
            name: $name\n
            message: $message";

        fwrite($myfile, $txt);
        fclose($myfile);*/

        return new Response("", Response::HTTP_OK);



    }

}



/**
 * $message = $request->request->get("message");
$phone = $request->request->get("phone");
$name = $request->request->get("name");
$mail = $request->request->get("mail");

if ( !$message || !$phone || $name || $mail)
return new Response("$message, $phone, $name, $mail", Response::HTTP_BAD_REQUEST);

return new Response("", Response::HTTP_OK);
 */